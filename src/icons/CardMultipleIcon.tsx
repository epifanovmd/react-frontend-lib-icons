import React, { FC, memo } from 'react';
import CardMultipleSvg from '../svg/card-multiple.svg';

export interface ICardMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardMultipleIcon: FC<ICardMultipleIconProps> = memo(props => {
  return <CardMultipleSvg {...props} />;
});
