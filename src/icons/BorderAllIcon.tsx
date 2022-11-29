import React, { FC, memo } from 'react';
import BorderAllSvg from '../svg/border-all.svg';

export interface IBorderAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderAllIcon: FC<IBorderAllIconProps> = memo(props => {
  return <BorderAllSvg {...props} />;
});
