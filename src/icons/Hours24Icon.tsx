import React, { FC, memo } from 'react';
import Hours24Svg from '../svg/hours-24.svg';

export interface IHours24IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Hours24Icon: FC<IHours24IconProps> = memo(props => {
  return <Hours24Svg {...props} />;
});
