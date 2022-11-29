import React, { FC, memo } from 'react';
import TextBoxRemoveOutlineSvg from '../svg/text-box-remove-outline.svg';

export interface ITextBoxRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxRemoveOutlineIcon: FC<ITextBoxRemoveOutlineIconProps> = memo(props => {
  return <TextBoxRemoveOutlineSvg {...props} />;
});
