import React, { FC, memo } from 'react';
import TextBoxSearchOutlineSvg from '../svg/text-box-search-outline.svg';

export interface ITextBoxSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxSearchOutlineIcon: FC<ITextBoxSearchOutlineIconProps> = memo(props => {
  return <TextBoxSearchOutlineSvg {...props} />;
});
