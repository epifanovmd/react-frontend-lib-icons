import React, { FC, memo } from 'react';
import PlusBoxMultipleSvg from '../svg/plus-box-multiple.svg';

export interface IPlusBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusBoxMultipleIcon: FC<IPlusBoxMultipleIconProps> = memo(props => {
  return <PlusBoxMultipleSvg {...props} />;
});
