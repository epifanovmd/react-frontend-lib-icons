import React, { FC, memo } from 'react';
import MosqueOutlineSvg from '../svg/mosque-outline.svg';

export interface IMosqueOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MosqueOutlineIcon: FC<IMosqueOutlineIconProps> = memo(props => {
  return <MosqueOutlineSvg {...props} />;
});
