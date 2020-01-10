export const retirarFormatacao = value => {
  value = value.toString();
  return (value = value.replace(/(\.|\/|\-)/g, ''));
};
export const retirarFormatacaoCPF = value => {
  value = value.toString();
  return (value = value.replace(/(\.|\/|)/g, ''));
};
export const mascaraCpf = value => {
  value = value.toString();
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};
export const mascaraCnpj = value => {
  value = value.toString();
  return value.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    '$1.$2.$3/$4-$5',
  );
};
export const mascaraDinheiro = (value = '--') => {
  if (value !== '0' && value !== undefined) {
    let newValue = value * 1;
    newValue = Number.parseFloat(newValue).toFixed(2);
    newValue = newValue.toString();
    if (newValue.includes('.')) {
      newValue = newValue.split('.').join('');
      if (newValue.length <= 5) {
        if (newValue.length === 3) {
          value = newValue.replace(/(\d{1})(\d{2})/g, '$1,$2');
        }
        if (newValue.length === 4) {
          value = newValue.replace(/(\d{2})(\d{2})/g, '$1,$2');
        }
        if (newValue.length === 5) {
          value = newValue.replace(/(\d{3})(\d{2})/g, '$1,$2');
        }
      } else {
        value = newValue.replace(/(\d{1})(\d{3})(\d{2})/g, '$1.$2,$3');
      }
    } else {
      value = newValue.replace(/(\d{1})(\d{3})(\d{2})/g, '$1.$2,$3');
    }
  }
  return value !== 'NaN' ? value : '--';
};
export const mascaraTelefone = (value = '--', type = 'default') => {
  if (value !== '' && value !== undefined) {
    if (type === 'whatsapp') {
      value = value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, '($1) $2 $3-$4');
    } else {
      value = value.replace(/(\d{2})(\d{4})(\d{4})/g, '($1) $2-$3');
    }
  }

  return value;
};
