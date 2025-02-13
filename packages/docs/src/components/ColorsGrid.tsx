import { colors } from '@althman-ui/tokens';
import { getContrast } from 'polished';

export function ColorsGrid() {
    return Object.entries(colors).map(([key, color]) => {
        return (
            <div key={key} style={{ background: color, padding: '2rem' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'monospace',
                        color:
                            getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
                        // se a contraste for menor que 3.5, o texto será preto. (Isso é pq os texto são brancos e no fundo branco não da para enxergar)
                    }}
                >
                    <strong>${key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        );
    });
    // estou percorrendo todas as cores, pegando a chave e o valor (nome da cor e o hexadecimal da cor)
}
