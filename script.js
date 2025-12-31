const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const passwordDisplay = document.getElementById("password");
const factBox = document.getElementById("factBox");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

const facts = [
  "استفاده از رمز عبور قوی از هک شدن حساب‌های شما جلوگیری می‌کند",
  "رمزهای طولانی‌تر و ترکیبی امنیت بیشتری دارند",
  "هر حساب باید رمز عبور منحصر به فرد خودش را داشته باشد",
  "رمز عبور ساده اولین هدف هکرهاست",
  "به روز کردن منظم رمزها امنیت شما را بالا می‌برد",
  "رمز عبور باید ترکیبی از اعداد حروف و نمادها باشد",
  "استفاده از مدیر رمز عبور می‌تواند امنیت شما را بهبود دهد",
  "رمزهای کوتاه و ساده احتمال نفوذ بیشتری دارند",
  "رمز عبور شما نباید با اطلاعات شخصی‌تان مرتبط باشد",
  "فعال کردن تایید دو مرحله‌ای امنیت شما را چند برابر می‌کند",
  "رمز عبور قوی اولین خط دفاع شما در برابر هک است",
  "هرگز رمزهای مشابه برای چند سایت استفاده نکنید",
  "رمز عبور خود را به صورت دوره‌ای تغییر دهید",
  "از ترکیب حروف اعداد و نمادها برای افزایش امنیت استفاده کنید"
];

lengthInput.addEventListener("input", () => {
  lengthValue.innerText = lengthInput.value;
});

// نمایش فکت تصادفی بدون نقطه
function showRandomFact() {
  const index = Math.floor(Math.random() * facts.length);
  factBox.innerText = facts[index];
}

// تولید رمز واقعی
function generatePassword() {
  let length = parseInt(lengthInput.value);
  let charset = "";
  if(includeUppercase.checked) charset += upper;
  if(includeLowercase.checked) charset += lower;
  if(includeNumbers.checked) charset += numbers;
  if(includeSymbols.checked) charset += symbols;

  if(!charset) {
    alert("حداقل یک نوع کاراکتر انتخاب کنید");
    return "";
  }

  let password = "";
  for(let i=0;i<length;i++){
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

// Event ها
generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  if(password){
    passwordDisplay.innerText = password;
  }
});

copyBtn.addEventListener("click", () => {
  const password = passwordDisplay.innerText;
  if(password && password !== "رمز شما اینجا نمایش داده می‌شود"){
    navigator.clipboard.writeText(password);
    alert("رمز کپی شد");
  }
});

// هنگام لود صفحه فکت تصادفی نمایش داده شود
showRandomFact();
