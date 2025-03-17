"use client";

import { useState, useEffect } from "react";
import { Form, Input, Button, message, Card, Typography, Modal } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

// Static student data
const staticStudentData = [
  {"id":1,"roll_no":"298","active_status":1,"created_at":"2025-03-10 19:42:56","is_graduate":0},
  {"id":2,"roll_no":"299","active_status":1,"created_at":"2025-03-10 19:42:56","is_graduate":0},
  {"id":3,"roll_no":"300","active_status":1,"created_at":"2025-03-10 19:42:56","is_graduate":0},
  {"id":4,"roll_no":"301","active_status":1,"created_at":"2025-03-10 19:42:56","is_graduate":0},
  {"id":5,"roll_no":"302","active_status":1,"created_at":"2025-03-10 19:42:56","is_graduate":0}
];

export default function StudentIDVerification() {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);
  const [studentDatabase, setStudentDatabase] = useState({});
  const [loading, setLoading] = useState(true);

  // Initialize student data on component mount
  useEffect(() => {
    try {
      // Transform static data into a lookup object with roll_no as key
      const database = staticStudentData.reduce((acc, student) => {
        acc[student.roll_no] = {
          id: student.id,
          enrollmentDate: student.created_at.split(' ')[0],
          status: student.active_status === 1 ? t('status.active') : t('status.inactive'),
          graduateStatus: student.is_graduate === 1 ? t('status.graduated') : t('status.notGraduated')
        };
        return acc;
      }, {});
      
      setStudentDatabase(database);
    } catch (error) {
      console.error("Error processing student data:", error);
      message.error(t('studentVerification.loadingError'));
    } finally {
      setLoading(false);
    }
  }, [i18n.language, t]);

  const onFinish = (values) => {
    const { studentId } = values;
    if (studentDatabase[studentId]) {
      setStudentInfo(studentDatabase[studentId]);
      setIsModalVisible(true);
    } else {
      message.error(t('studentVerification.studentNotFound'));
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <section className="py-16 px-4 max-w-md mx-auto pb-10 md:pb-48">
      <Card className="shadow-md">
        <Title level={2} className="text-center mb-8">
          {t('studentVerification.title')}
        </Title>

        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="studentId"
            label={t('studentVerification.studentId')}
            rules={[{ required: true, message: t('studentVerification.pleaseEnterStudentId') }]}
           >
            <Input placeholder={t('studentVerification.enterStudentId')} />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="w-full"
              loading={loading}
              disabled={loading}
            >
              {t('studentVerification.verifyId')}
            </Button>
          </Form.Item>
        </Form>

        <Modal
          title={t('studentVerification.verificationResult')}
          open={isModalVisible}
          onOk={closeModal}
          onCancel={closeModal}
          footer={[
            <Button key="close" onClick={closeModal}>
              {t('studentVerification.close')}
            </Button>
          ]}>
          {studentInfo && (
            <div>
              <div className="flex items-center mb-4">
                <CheckCircleOutlined className="text-green-500 text-2xl mr-2" />
                <Text strong className="text-lg">
                  {t('studentVerification.idVerifiedSuccess')}
                </Text>
              </div>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <Text strong>{t('studentVerification.studentIdLabel')}</Text> {form.getFieldValue('studentId')}
                </li>
                <li className="mb-2">
                  <Text strong>{t('studentVerification.enrollmentDate')}</Text>{" "}
                  {studentInfo.enrollmentDate}
                </li>
                <li className="mb-2">
                  <Text strong>{t('studentVerification.status')}</Text> {studentInfo.status}
                </li>
                <li className="mb-2">
                  <Text strong>{t('studentVerification.graduateStatus')}</Text> {studentInfo.graduateStatus}
                </li>
              </ul>
            </div>
          )}
        </Modal>
      </Card>
    </section>
  );
}
