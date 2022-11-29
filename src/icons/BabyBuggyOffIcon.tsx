import React, { FC, memo } from 'react';
import BabyBuggyOffSvg from '../svg/baby-buggy-off.svg';

export interface IBabyBuggyOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabyBuggyOffIcon: FC<IBabyBuggyOffIconProps> = memo(props => {
  return <BabyBuggyOffSvg {...props} />;
});
