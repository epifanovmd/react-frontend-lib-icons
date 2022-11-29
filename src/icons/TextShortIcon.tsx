import React, { FC, memo } from 'react';
import TextShortSvg from '../svg/text-short.svg';

export interface ITextShortIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextShortIcon: FC<ITextShortIconProps> = memo(props => {
  return <TextShortSvg {...props} />;
});
