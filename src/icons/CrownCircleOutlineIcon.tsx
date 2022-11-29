import React, { FC, memo } from 'react';
import CrownCircleOutlineSvg from '../svg/crown-circle-outline.svg';

export interface ICrownCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrownCircleOutlineIcon: FC<ICrownCircleOutlineIconProps> = memo(props => {
  return <CrownCircleOutlineSvg {...props} />;
});
