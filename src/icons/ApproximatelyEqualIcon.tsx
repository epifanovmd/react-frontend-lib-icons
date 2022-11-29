import React, { FC, memo } from 'react';
import ApproximatelyEqualSvg from '../svg/approximately-equal.svg';

export interface IApproximatelyEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApproximatelyEqualIcon: FC<IApproximatelyEqualIconProps> = memo(props => {
  return <ApproximatelyEqualSvg {...props} />;
});
