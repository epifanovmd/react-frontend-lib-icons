import React, { FC, memo } from 'react';
import ViolinSvg from '../svg/violin.svg';

export interface IViolinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViolinIcon: FC<IViolinIconProps> = memo(props => {
  return <ViolinSvg {...props} />;
});
