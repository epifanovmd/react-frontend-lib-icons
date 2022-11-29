import React, { FC, memo } from 'react';
import CrownOutlineSvg from '../svg/crown-outline.svg';

export interface ICrownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrownOutlineIcon: FC<ICrownOutlineIconProps> = memo(props => {
  return <CrownOutlineSvg {...props} />;
});
