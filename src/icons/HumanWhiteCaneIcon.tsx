import React, { FC, memo } from 'react';
import HumanWhiteCaneSvg from '../svg/human-white-cane.svg';

export interface IHumanWhiteCaneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanWhiteCaneIcon: FC<IHumanWhiteCaneIconProps> = memo(props => {
  return <HumanWhiteCaneSvg {...props} />;
});
