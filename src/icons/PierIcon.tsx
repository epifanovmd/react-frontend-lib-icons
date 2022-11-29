import React, { FC, memo } from 'react';
import PierSvg from '../svg/pier.svg';

export interface IPierIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PierIcon: FC<IPierIconProps> = memo(props => {
  return <PierSvg {...props} />;
});
