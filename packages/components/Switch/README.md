# Switch

O módulo `Switch` é usado para ativar opções predefinida.

<!-- @example ./example/Example.Html -->
<div class="iframe-wrapper">
  <iframe src="http://bundlebrowser.mambaweb.now.sh/#!/switch"></iframe>
</div>

## Parâmetros

| Parâmetro | Descrição                                         | Tipo            | Padrão     |
| :-------- | :------------------------------------------------ | :-------------- | :--------- |
| change    | lança um evento quando o componente é modificado  | `function`      | `undefined`|
| checked   | deixa o switch ativado                            | `undefined`     | `true`     |
| disabled  | desabilita o switch                               | `undefined`     | `true`     |


## Métodos

### Switch.toggle(value)

Alterna o valor de `checked` do switch, caso `value` seja passado como parâmtro define `checked` para este valor.
