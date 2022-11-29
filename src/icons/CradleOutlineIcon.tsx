import React, { FC, memo } from 'react';
import CradleOutlineSvg from '../svg/cradle-outline.svg';

export interface ICradleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CradleOutlineIcon: FC<ICradleOutlineIconProps> = memo(props => {
  return <CradleOutlineSvg {...props} />;
});
