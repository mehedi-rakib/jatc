"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App as AntdApp, ConfigProvider } from "antd";

/**
 * AntdRegistry extracts antd's CSS-in-JS during SSR so the first paint is
 * already styled (no flash of unstyled widgets). ConfigProvider then aligns
 * antd's tokens with the Tailwind brand palette.
 *
 * AntdApp is rendered with `component={false}`: we only want its context
 * (message / modal / notification via App.useApp). Its default wrapper div
 * ships a global `a { color: colorLink }` rule that would recolour every
 * Tailwind-styled link on the site.
 */
const theme = {
  token: {
    colorPrimary: "#e31e24",
    colorInfo: "#41c5e5",
    colorSuccess: "#16a34a",
    colorWarning: "#ffc107",
    colorLink: "#e31e24",
    colorTextBase: "#0a2540",
    borderRadius: 10,
    fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
    fontSize: 15,
    motionDurationMid: "0.25s",
    motionEaseInOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  components: {
    Button: { borderRadius: 999, controlHeight: 42, fontWeight: 600 },
    Card: { borderRadiusLG: 16, paddingLG: 20 },
    Input: { controlHeight: 44 },
    Select: { controlHeight: 44 },
    Rate: { starColor: "#ffc107" },
  },
};

export default function Providers({ children }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>
        <AntdApp component={false}>{children}</AntdApp>
      </ConfigProvider>
    </AntdRegistry>
  );
}
