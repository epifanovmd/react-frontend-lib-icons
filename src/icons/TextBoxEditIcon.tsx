import React, { FC, memo } from 'react';
import TextBoxEditSvg from '../svg/text-box-edit.svg';

export interface ITextBoxEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxEditIcon: FC<ITextBoxEditIconProps> = memo(props => {
  return <TextBoxEditSvg {...props} />;
});
