import React, { FC, memo } from 'react';
import TextBoxPlusOutlineSvg from '../svg/text-box-plus-outline.svg';

export interface ITextBoxPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxPlusOutlineIcon: FC<ITextBoxPlusOutlineIconProps> = memo(props => {
  return <TextBoxPlusOutlineSvg {...props} />;
});
