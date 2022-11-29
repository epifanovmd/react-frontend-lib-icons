import React, { FC, memo } from 'react';
import TextBoxRemoveSvg from '../svg/text-box-remove.svg';

export interface ITextBoxRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxRemoveIcon: FC<ITextBoxRemoveIconProps> = memo(props => {
  return <TextBoxRemoveSvg {...props} />;
});
