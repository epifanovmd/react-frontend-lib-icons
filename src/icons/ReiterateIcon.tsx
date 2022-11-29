import React, { FC, memo } from 'react';
import ReiterateSvg from '../svg/reiterate.svg';

export interface IReiterateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReiterateIcon: FC<IReiterateIconProps> = memo(props => {
  return <ReiterateSvg {...props} />;
});
