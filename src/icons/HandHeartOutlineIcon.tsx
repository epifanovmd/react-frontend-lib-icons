import React, { FC, memo } from 'react';
import HandHeartOutlineSvg from '../svg/hand-heart-outline.svg';

export interface IHandHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandHeartOutlineIcon: FC<IHandHeartOutlineIconProps> = memo(props => {
  return <HandHeartOutlineSvg {...props} />;
});
