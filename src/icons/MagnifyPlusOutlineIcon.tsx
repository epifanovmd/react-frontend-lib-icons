import React, { FC, memo } from 'react';
import MagnifyPlusOutlineSvg from '../svg/magnify-plus-outline.svg';

export interface IMagnifyPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyPlusOutlineIcon: FC<IMagnifyPlusOutlineIconProps> = memo(props => {
  return <MagnifyPlusOutlineSvg {...props} />;
});
