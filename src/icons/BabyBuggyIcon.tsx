import React, { FC, memo } from 'react';
import BabyBuggySvg from '../svg/baby-buggy.svg';

export interface IBabyBuggyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabyBuggyIcon: FC<IBabyBuggyIconProps> = memo(props => {
  return <BabyBuggySvg {...props} />;
});
