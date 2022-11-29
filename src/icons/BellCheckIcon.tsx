import React, { FC, memo } from 'react';
import BellCheckSvg from '../svg/bell-check.svg';

export interface IBellCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellCheckIcon: FC<IBellCheckIconProps> = memo(props => {
  return <BellCheckSvg {...props} />;
});
