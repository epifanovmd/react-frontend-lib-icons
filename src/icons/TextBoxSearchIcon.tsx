import React, { FC, memo } from 'react';
import TextBoxSearchSvg from '../svg/text-box-search.svg';

export interface ITextBoxSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxSearchIcon: FC<ITextBoxSearchIconProps> = memo(props => {
  return <TextBoxSearchSvg {...props} />;
});
