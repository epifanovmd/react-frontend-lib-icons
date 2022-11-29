import React, { FC, memo } from 'react';
import MagnifyRemoveOutlineSvg from '../svg/magnify-remove-outline.svg';

export interface IMagnifyRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyRemoveOutlineIcon: FC<IMagnifyRemoveOutlineIconProps> = memo(props => {
  return <MagnifyRemoveOutlineSvg {...props} />;
});
