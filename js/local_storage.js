const fields = document.querySelectorAll('.field-data');

let formData = {
  name: '',
  email: '',
  message: '',
};

fields.forEach((field) => {
  field.addEventListener('input', () => {
    formData[field.name] = field.value;
    localStorage.setItem('portfolio-form-data', JSON.stringify(formData));
  });
});

window.addEventListener('load', () => {
  const storedData = localStorage.getItem('portfolio-form-data');
  formData = JSON.parse(storedData);

  fields.forEach((field) => {
    field.value = formData[field.name];
  });
});
