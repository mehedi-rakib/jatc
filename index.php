<?php
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['email'])) {
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    if ($email) {
        $message = "Thank you for joining the waitlist, " . htmlspecialchars($email) . "!";
    } else {
        $message = "Please enter a valid email address.";
    }
}
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Tiffin BD - Fresh Meals for Every Student</title>
  <meta name="description" content="Tiffin BD delivers fresh, hygienic, and affordable meals to students and office-goers across Bangladesh." />
  <link rel="icon" href="https://tiffin.com.bd/favicon.ico" />
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Inter & Noto Sans Bengali -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap" rel="stylesheet" />
  
  <style>
    body {
      font-family: 'Noto Sans Bengali', 'Inter', sans-serif;
      scroll-behavior: smooth;
      color: #1f2937;
      background:
        linear-gradient(135deg, #f0fdf4 0%, #fee2e2 100%);
      min-height: 100vh;
    }

    .bangla-text {
      font-family: 'Noto Sans Bengali', sans-serif;
      letter-spacing: -0.02em;
      line-height: 1.4;
    }
    /* Fade & slide up animation */
    .animate-fade-slide-up {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .animate-fade-slide-up.visible {
      opacity: 1;
      transform: translateY(0);
    }
    /* Header styles */
    header {
      background: white;
      box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
      position: sticky;
      top: 0;
      z-index: 50;
    }
    /* Mobile menu styles */
    #menu {
      transition: all 0.3s ease-in-out;
    }
    
    @media (max-width: 768px) {
      #menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 1rem;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      }
      #menu li {
        display: block;
        margin: 1rem 0;
        text-align: center;
      }
      #menu li a {
        display: block;
        padding: 0.5rem;
      }
    }

    /* Loading skeleton animation */
    .skeleton {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }

    @keyframes loading {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }

    /* Preload state */
    .preload {
      position: relative;
    }

    .preload::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: inherit;
    }

    .preload.loaded::before {
      display: none;
    }
  </style>
</head>
<body class="flex flex-col min-h-screen">

  <!-- Notification Bar -->
  <div class="bg-gradient-to-r from-green-600 to-red-500 text-white py-2 text-center relative">
    <p class="text-sm md:text-base">
      🎉 রমজান স্পেশাল অফার! ১৫% ছাড় সকল প্যাকেজে। / Ramadan Special Offer! 15% off on all packages
    </p>
  </div>
  
  <!-- Responsive Header -->
  <header class="w-full">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
      <a href="#hero" class="text-2xl font-extrabold text-pink-600 hover:text-pink-700 transition">Tiffin BD</a>
      <input type="checkbox" id="menuToggle" class="hidden" />
      <label for="menuToggle" class="cursor-pointer md:hidden block">
        <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </label>
      <ul id="menu" class="hidden md:flex space-x-8 text-gray-700 font-semibold bangla-text">
        <li><a href="#hero" class="hover:text-pink-600 transition">হোম</a></li>
        <li><a href="#why" class="hover:text-pink-600 transition">কেন আমরা</a></li>
        <li><a href="#how" class="hover:text-pink-600 transition">কীভাবে কাজ করে</a></li>
        <li><a href="#about" class="hover:text-pink-600 transition">আমাদের সম্পর্কে</a></li>
        <li><a href="#testimonials" class="hover:text-pink-600 transition">গ্রাহকদের মতামত</a></li>
        <li><a href="#faq" class="hover:text-pink-600 transition">প্রশ্নোত্তর</a></li>
        <li><a href="#waitlist" class="bg-pink-600 text-white rounded-full px-4 py-2 hover:bg-pink-700 transition">অর্ডার করুন</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="bg-gradient-to-r from-green-600 to-red-500 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-32 gap-12">
    <div class="max-w-xl text-center md:text-left animate-fade-slide-up" data-animate>
      <h1 class="bangla-text text-4xl md:text-6xl font-bold leading-tight mb-8 drop-shadow-lg">
        <span class="block mb-4">বাংলাদেশের</span>
        <span class="block mb-4">সেরা টিফিন</span>
        <span class="block">সার্ভিস</span>
      </h1>
      <p class="bangla-text text-xl md:text-2xl mb-10 drop-shadow-md leading-relaxed">
        দেশী স্বাদে প্রতিদিনের খাবার<br>
        ঘরের খাবার, মায়ের হাতের স্বাদ
      </p>
      <a href="#waitlist" class="bangla-text inline-block bg-white text-green-600 font-semibold rounded-full px-10 py-4 shadow-lg hover:scale-105 transition duration-300 text-lg">
        অর্ডার করুন
      </a>
    </div>
    <img 
      src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg" 
      alt="Traditional Bangladeshi Tiffin" 
      class="w-520 md:w-860 h-auto animate-fade-slide-up rounded-lg shadow-xl" 
      loading="lazy" 
      data-animate
    />
  </section>

  <main class="flex-grow max-w-7xl mx-auto px-6 md:px-20 space-y-24 py-20">

    <!-- Why Tiffin BD -->
    <section id="why" class="bg-white rounded-3xl shadow-lg p-8 md:p-12 mx-4 md:mx-0">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">কেন টিফিন বিডি বেছে নিবেন?</h2>
      <h3 class="text-xl text-gray-600 text-center mb-12">Why Choose Tiffin BD?</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
        <?php 
        $features = [
          ['🍚', 'টেস্টি দেশী খাবার', 'প্রতিদিন তাজা ও পুষ্টিকর খাবার মায়ের হাতের স্বাদে।'],
          ['⏱️', 'সময়মত ডেলিভারি', 'আপনার পছন্দের সময়ে ৩০ মিনিটের মধ্যে ডেলিভারি।'],
          ['💸', 'স্টুডেন্ট ফ্রেন্ডলি মূল্য', 'শিক্ষার্থীদের জন্য বিশেষ মূল্যে মাসিক প্যাকেজ।'],
          ['🌶️', 'দেশী মসলা', 'শুধু দেশী মসলা ব্যবহার করে রান্না করা খাবার।'],
          ['🌿', 'হাইজিনিক প্যাকেজিং', 'পরিবেশবান্ধব এবং নিরাপদ প্যাকেজিং।'],
          ['📱', 'সহজ অর্ডার', 'মোবাইল অ্যাপ বা ওয়েবসাইট থেকে সহজে অর্ডার করুন।']
        ];
        foreach ($features as $index => [$icon, $title, $desc]) : ?>
          <article class="flex flex-col items-center text-center opacity-0 animate-fade-slide-up" data-animate style="transition-delay: <?= 0.15 * $index ?>s;">
            <div class="text-7xl mb-6"><?= $icon ?></div>
            <h3 class="text-2xl font-semibold mb-3"><?= htmlspecialchars($title) ?></h3>
            <p class="text-gray-600 max-w-xs"><?= htmlspecialchars($desc) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how" class="bg-gradient-to-r from-green-50 to-red-50 rounded-3xl shadow-lg p-12">
      <h2 class="text-4xl font-bold text-center mb-4">কীভাবে কাজ করে?</h2>
      <h3 class="text-xl text-gray-600 text-center mb-16">How It Works</h3>
      <div class="flex flex-col md:flex-row justify-center gap-12">
        <?php 
        $steps = [
          ['1', 'মেনু দেখুন', 'প্রতিদিনের তাজা খাবারের তালিকা দেখুন।'],
          ['2', 'অর্ডার করুন', 'পছন্দের খাবার বেছে নিয়ে পেমেন্ট করুন।'],
          ['3', 'ডেলিভারি নিন', 'গরম খাবার বাসায় বা অফিসে পৌঁছে যাবে।'],
        ];
        foreach ($steps as $index => [$num, $title, $desc]) : ?>
          <article class="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center text-center opacity-0 animate-fade-slide-up" data-animate style="transition-delay: <?= 0.2 * $index ?>s; max-width: 320px;">
            <div class="text-5xl font-bold text-green-600 mb-6"><?= $num ?></div>
            <h3 class="mb-4 text-3xl font-semibold"><?= htmlspecialchars($title) ?></h3>
            <p class="text-gray-600"><?= htmlspecialchars($desc) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </section>

    <!-- About Tiffin BD -->
    <section id="about" class="bg-white rounded-3xl shadow-lg p-12 max-w-4xl mx-auto text-center">
      <h2 class="bangla-text text-4xl font-bold mb-4">আমাদের সম্পর্কে</h2>
      <div class="space-y-6">
        <p class="bangla-text text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          টিফিন বিডি বাংলাদেশের প্রথম অনলাইন টিফিন ডেলিভারি প্ল্যাটফর্ম। আমরা শিক্ষার্থী, অফিস কর্মী এবং সকল পেশার মানুষের জন্য তাজা ও পুষ্টিকর খাবার সরবরাহ করি。
        </p>
        <p class="bangla-text text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          আমাদের সাথে যুক্ত রয়েছে ঢাকার বিভিন্ন এলাকার অভিজ্ঞ রান্নাঘর এবং রেস্তোরাঁ, যারা নিশ্চিত করে দেশী স্বাদে উন্নতমানের খাবার。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="text-center">
            <h3 class="text-3xl font-bold text-green-600 mb-2">১০০+</h3>
            <p class="bangla-text text-gray-600">নিবন্ধিত রান্নাঘর</p>
          </div>
          <div class="text-center">
            <h3 class="text-3xl font-bold text-green-600 mb-2">৫০০০+</h3>
            <p class="bangla-text text-gray-600">সন্তুষ্ট গ্রাহক</p>
          </div>
          <div class="text-center">
            <h3 class="text-3xl font-bold text-green-600 mb-2">২০+</h3>
            <p class="bangla-text text-gray-600">সেবা এলাকা</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="bg-green-50 rounded-3xl shadow-lg p-12 max-w-5xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4">আমাদের গ্রাহকদের মতামত</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <?php 
        $testimonials = [
          ['রহিম ভাই', 'প্রতিদিন অফিসে খাবার নিয়ে চিন্তা করতে হয় না। টিফিন বিডি-র খাবার একদম মায়ের হাতের রান্নার মতো!', 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'],
          ['তাসনিম আপু', 'ছাত্রী হিসেবে এত কম খরচে এত ভালো খাবার পাওয়া অসম্ভব ছিল। এখন রোজ গরম ও তাজা খাবার পাই।', 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'],
          ['কামাল ভাই', 'পরিষ্কার-পরিচ্ছন্ন, স্বাস্থ্যসম্মত খাবার। সার্ভিসও খুব ভালো। নিয়মিত গ্রাহক হয়ে গেছি!', 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg'],
        ];
        foreach ($testimonials as $index => [$name, $quote, $img]) : ?>
          <blockquote class="bg-white rounded-xl p-8 shadow-md opacity-0 animate-fade-slide-up" data-animate style="transition-delay: <?= 0.15 * $index ?>s;">
            <div class="flex items-center mb-4 space-x-4">
              <img src="<?= $img ?>" alt="<?= htmlspecialchars($name) ?>" class="w-14 h-14 rounded-full object-cover" loading="lazy" />
              <footer class="text-lg font-semibold text-pink-600"><?= htmlspecialchars($name) ?></footer>
            </div>
            <p class="text-gray-700 italic">“<?= htmlspecialchars($quote) ?>”</p>
          </blockquote>
        <?php endforeach; ?>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="bg-white rounded-3xl shadow-lg p-12 max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-4 text-center">সচরাচর জিজ্ঞাসা</h2>
      <dl class="space-y-6">
        <div>
          <dt class="font-semibold text-green-600 cursor-pointer">কীভাবে অর্ডার করব?</dt>
          <dd class="mt-2 text-gray-700">আমাদের ওয়েবসাইট বা অ্যাপ থেকে মেনু দেখে পছন্দের খাবার সিলেক্ট করুন, পেমেন্ট করুন, আর ডেলিভারি পেয়ে যান।</dd>
        </div>
        <div>
          <dt class="font-semibold text-green-600 cursor-pointer">কোন কোন এলাকায় ডেলিভারি দেন?</dt>
          <dd class="mt-2 text-gray-700">ঢাকার প্রধান বিশ্ববিদ্যালয় ও অফিস এলাকায় ডেলিভারি দিয়ে থাকি। নতুন এলাকা নিয়মিত যুক্ত হচ্ছে।</dd>
        </div>
        <div>
          <dt class="font-semibold text-green-600 cursor-pointer">খাবার কি হাইজিনিক ও নিরাপদ?</dt>
          <dd class="mt-2 text-gray-700">অবশ্যই। আমরা শুধু সরকার অনুমোদিত রান্নাঘর ও রেস্তোরাঁর সাথে কাজ করি, যারা কঠোর স্বাস্থ্যবিধি মেনে চলে।</dd>
        </div>
        <div>
          <dt class="font-semibold text-green-600 cursor-pointer">মাসিক প্যাকেজ কি আছে?</dt>
          <dd class="mt-2 text-gray-700">হ্যাঁ, শিক্ষার্থী ও অফিস কর্মীদের জন্য বিশেষ মাসিক প্যাকেজ রয়েছে যা কিনা সাশ্রয়ী।</dd>
        </div>
      </dl>
    </section>

    <!-- Waitlist -->
    <section id="waitlist" class="bg-gradient-to-r from-green-600 to-red-500 text-white max-w-xl mx-auto text-center rounded-3xl shadow-lg p-12">
      <h2 class="text-4xl font-bold mb-4">আমাদের অ্যাপ আসছে শীঘ্রই</h2>
      <h3 class="text-xl mb-6">App Coming Soon...</h3>
      <form id="waitlistForm" method="POST" novalidate class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="আপনার ইমেইল দিন / Enter your email" 
          required 
          class="w-full sm:w-auto flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Email address"
        />
        <button 
          type="submit" 
          class="bg-white text-green-600 font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition duration-300 flex items-center justify-center"
          id="submitBtn"
          aria-live="polite"
        >
          <span id="btnText">সাবস্ক্রাইব করুন</span>
          <svg id="btnSpinner" class="hidden animate-spin ml-2 h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </button>
      </form>
      <p id="formMessage" class="mt-4 text-green-100 font-medium min-h-[1.5rem]"><?= htmlspecialchars($message) ?></p>
    </section>

  </main>

  <!-- Footer -->
  <footer class="bg-gradient-to-r from-green-600 to-red-500 text-white py-8 mt-auto">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex flex-col items-center md:items-start">
        <img src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg" alt="Tiffin BD Logo" class="h-12 mb-4 rounded-full bg-white p-1" />
        <address class="not-italic text-center md:text-left">
          <p>যোগাযোগ: <a href="mailto:contact@Tiffin.com.bd" class="underline hover:text-green-200">contact@Tiffin.com.bd</a></p>
          <p class="mt-2">হটলাইন: <a href="tel:+8801712345678" class="hover:text-green-200">০১৭১২৩৪৫৬৭৮</a></p>
          <p class="mt-2">ঠিকানা: মিরপুর-২, ঢাকা-১২১৬, বাংলাদেশ</p>
        </address>
      </div>
      
      <div class="flex flex-col items-center md:items-end">
        <div class="flex gap-4 mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png" alt="Bangladesh Flag" class="h-6" />
        </div>
        <nav class="flex space-x-6 text-2xl" aria-label="Social media links">
          <a href="https://facebook.com/Tiffinbd" target="_blank" rel="noopener" aria-label="Facebook" class="hover:text-green-200 transition duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Facebook" class="h-8 w-8 rounded bg-white p-1" />
          </a>
          <a href="https://twitter.com/Tiffinbd" target="_blank" rel="noopener" aria-label="Twitter" class="hover:text-green-200 transition duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" class="h-8 w-8 rounded bg-white p-1" />
          </a>
          <a href="https://instagram.com/Tiffinbd" target="_blank" rel="noopener" aria-label="Instagram" class="hover:text-green-200 transition duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" class="h-8 w-8 rounded bg-white p-1" />
          </a>
        </nav>
      </div>
    </div>
    <p class="text-center mt-6 font-semibold">
      স্বত্ব © ২০২৫ টিফিন বিডি । সর্বস্বত্ব সংরক্ষিত । <br>
      <span class="text-sm">Made with <span class="text-red-300">❤️</span> EWS</span>
    </p>
  </footer>

  <a href="https://wa.me/+8801712345678" target="_blank" rel="noopener" class="fixed bottom-6 right-6 bg-white text-white p-2 rounded-full shadow-lg hover:scale-110 transition-all z-50">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" alt="WhatsApp" class="h-12 w-12" />
  </a>

  <script>
    // Animate elements on scroll
    document.addEventListener('DOMContentLoaded', () => {
      const elements = document.querySelectorAll('[data-animate]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      elements.forEach(el => observer.observe(el));
    });

    // Form validation and submission feedback
    const form = document.getElementById('waitlistForm');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');

    // Enhanced form validation and feedback
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      formMessage.textContent = '';
      const email = emailInput.value.trim();

      if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('ring-2', 'ring-red-500');
        return;
      }

      btnText.classList.add('hidden');
      btnSpinner.classList.remove('hidden');
      submitBtn.disabled = true;
      emailInput.disabled = true;

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json',
          }
        });

        if (response.ok) {
          formMessage.textContent = 'Thank you for joining our waitlist! We\'ll notify you when we launch.';
          formMessage.classList.add('text-green-200');
          emailInput.value = '';
        } else {
          throw new Error('Something went wrong');
        }
      } catch (error) {
        formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        formMessage.classList.add('text-red-200');
      } finally {
        btnText.classList.remove('hidden');
        btnSpinner.classList.add('hidden');
        submitBtn.disabled = false;
        emailInput.disabled = false;
        emailInput.classList.remove('ring-2', 'ring-red-500');
      }
    });

    emailInput.addEventListener('input', () => {
      emailInput.classList.remove('ring-2', 'ring-red-500');
      formMessage.textContent = '';
    });

    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Close mobile menu if open
          document.getElementById('menuToggle').checked = false;
        }
      });
    });
    </script>
    
    <!-- Add loading animation for images -->
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.3s ease-in-out';
          img.addEventListener('load', () => {
            img.style.opacity = '1';
          });
        });
      });
    </script>
  </body>
</html>
