import React, { FC, memo } from 'react';
import EmoticonSadOutlineSvg from '../svg/emoticon-sad-outline.svg';

export interface IEmoticonSadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonSadOutlineIcon: FC<IEmoticonSadOutlineIconProps> = memo(props => {
  return <EmoticonSadOutlineSvg {...props} />;
});
