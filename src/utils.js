import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const availableSoonNotyf = () => {
    const notyf = new Notyf({
        duration: 5000,
        position: {
            x: 'right',
            y: 'bottom',
        },
        types: [
            {
                type: 'success',
                message: 'Available soon',
                background: '#ffffff',
                className: 'custom-notyf',
                icon: false,
                dismissible: true
            }
        ]
    });
    notyf.success();
}
