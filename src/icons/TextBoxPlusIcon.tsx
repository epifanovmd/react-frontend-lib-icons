import React, { FC, memo } from 'react';
import TextBoxPlusSvg from '../svg/text-box-plus.svg';

export interface ITextBoxPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxPlusIcon: FC<ITextBoxPlusIconProps> = memo(props => {
  return <TextBoxPlusSvg {...props} />;
});
