import React, { FC, memo } from 'react';
import CrownSvg from '../svg/crown.svg';

export interface ICrownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrownIcon: FC<ICrownIconProps> = memo(props => {
  return <CrownSvg {...props} />;
});
