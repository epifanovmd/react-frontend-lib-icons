import React, { FC, memo } from 'react';
import CrownCircleSvg from '../svg/crown-circle.svg';

export interface ICrownCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrownCircleIcon: FC<ICrownCircleIconProps> = memo(props => {
  return <CrownCircleSvg {...props} />;
});
