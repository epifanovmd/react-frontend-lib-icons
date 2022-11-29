import React, { FC, memo } from 'react';
import OctagramOutlineSvg from '../svg/octagram-outline.svg';

export interface IOctagramOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OctagramOutlineIcon: FC<IOctagramOutlineIconProps> = memo(props => {
  return <OctagramOutlineSvg {...props} />;
});
