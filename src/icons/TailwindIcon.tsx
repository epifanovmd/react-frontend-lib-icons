import React, { FC, memo } from 'react';
import TailwindSvg from '../svg/tailwind.svg';

export interface ITailwindIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TailwindIcon: FC<ITailwindIconProps> = memo(props => {
  return <TailwindSvg {...props} />;
});
