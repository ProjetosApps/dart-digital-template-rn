import {Alert as AlertNative} from 'react-native';

export class Util {
  static Alert(message = '', func = null, title = 'Atenção!') {
    return AlertNative.alert(title, message, [{text: 'OK', onPress: func}], {
      cancelable: false,
    });
  }

  static Confirm(
    message = '',
    funcOk = () => false,
    title = 'Atenção!',
    funcCancel = () => false,
    textConfirm = '',
    textCancel = '',
  ) {
    return AlertNative.alert(
      title,
      message,
      [
        {
          text: textCancel !== '' ? textCancel : 'Cancelar',
          onPress: funcCancel,
          style: 'cancel',
        },

        {text: textConfirm !== '' ? textConfirm : 'Confirmar', onPress: funcOk},
      ],
      {cancelable: false},
    );
  }
}
