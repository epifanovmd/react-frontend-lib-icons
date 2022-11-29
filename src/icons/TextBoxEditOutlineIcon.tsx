import React, { FC, memo } from 'react';
import TextBoxEditOutlineSvg from '../svg/text-box-edit-outline.svg';

export interface ITextBoxEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxEditOutlineIcon: FC<ITextBoxEditOutlineIconProps> = memo(props => {
  return <TextBoxEditOutlineSvg {...props} />;
});
