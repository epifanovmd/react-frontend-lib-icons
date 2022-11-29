import React, { FC, memo } from 'react';
import ApproximatelyEqualBoxSvg from '../svg/approximately-equal-box.svg';

export interface IApproximatelyEqualBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApproximatelyEqualBoxIcon: FC<IApproximatelyEqualBoxIconProps> = memo(props => {
  return <ApproximatelyEqualBoxSvg {...props} />;
});
