import { Label, MultiStepContainer, Steps, Step } from './styles';

export interface MultiStepProps {
    size: number;
    currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
    return (
        <MultiStepContainer>
            <Label>
                Passo {currentStep} de {size}
            </Label>
            {/** Para passar uma variavel para dentro do stitches, passo desta forma abaixo (css) e depois só recebo dentro do styles.*/}
            <Steps css={{ '--steps-size': size }}>
                {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
                    return <Step key={step} active={currentStep >= step} />;
                })}
            </Steps>
        </MultiStepContainer>
    );
}
MultiStep.displayName = 'MultiStep';

// {Array.from({length: 4}, (_, i) => i +1)}
// [1,2,3,4] => Estou criando um array do zero. O primeiro parametro do from é a quantidade (size) depois o conteudo do array (_), que irá vir zerado pois criei um array do zero, e na sequencia o indice (i)
// currentStep >= step verifica se o currentstep (passo atual) é igual ou maior ao  numero desse step que está selecionado, ai mudara a cor do step. Se estiver no passo 4, todos os passos ficaram brancos.
