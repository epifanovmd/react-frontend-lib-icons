import React, { FC, memo } from 'react';
import BowlMixSvg from '../svg/bowl-mix.svg';

export interface IBowlMixIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BowlMixIcon: FC<IBowlMixIconProps> = memo(props => {
  return <BowlMixSvg {...props} />;
});
