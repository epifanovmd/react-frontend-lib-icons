import React, { FC, memo } from 'react';
import CogTransferOutlineSvg from '../svg/cog-transfer-outline.svg';

export interface ICogTransferOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogTransferOutlineIcon: FC<ICogTransferOutlineIconProps> = memo(props => {
  return <CogTransferOutlineSvg {...props} />;
});
