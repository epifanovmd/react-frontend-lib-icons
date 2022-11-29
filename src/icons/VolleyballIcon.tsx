import React, { FC, memo } from 'react';
import VolleyballSvg from '../svg/volleyball.svg';

export interface IVolleyballIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolleyballIcon: FC<IVolleyballIconProps> = memo(props => {
  return <VolleyballSvg {...props} />;
});
