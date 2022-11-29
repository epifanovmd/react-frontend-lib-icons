import React, { FC, memo } from 'react';
import CogTransferSvg from '../svg/cog-transfer.svg';

export interface ICogTransferIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogTransferIcon: FC<ICogTransferIconProps> = memo(props => {
  return <CogTransferSvg {...props} />;
});
