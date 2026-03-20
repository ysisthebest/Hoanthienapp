export const formatPhone = (text) => {
  const cleaned = text.replace(/\D/g, '');

  let formatted = cleaned;

  if (cleaned.length > 6) {
    formatted = cleaned.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3');
  } else if (cleaned.length > 3) {
    formatted = cleaned.replace(/(\d{3})(\d+)/, '$1 $2');
  }

  return formatted;
};

export const validatePhone = (phone) => {

  const rawPhone = phone.replace(/\s/g, '');

  if (rawPhone.length < 10) {
    return { valid: false, message: "Số điện thoại chưa đủ 10 số" };
  }

  const phoneRegex = /^0\d{9}$/;

  if (!phoneRegex.test(rawPhone)) {
    return { valid: false, message: "Số điện thoại không đúng định dạng" };
  }

  return { valid: true, message: "Số điện thoại hợp lệ" };
};