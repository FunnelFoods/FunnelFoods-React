import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: colors.primaryLight,
        },
        topBar: {
            height: '12%',
            flex: 0,
            flexDirection: 'row',
            alignItems: 'flex-end'
        },
        bottomBar: {
            height: '12%',
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        preview: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        backButton: {
            marginLeft: '4%',
            marginBottom: '2%',
            flex: 0,
            alignItems: 'flex-start',
            width: '46%'
        },
        flashButton: {
            marginRight: '4%',
            marginBottom: '2%',
            flex: 0,
            alignItems: 'flex-end',
            width: '46%'
        }

    }
);

export { styles };