import React, { FC, memo } from 'react';
import EmoticonSickSvg from '../svg/emoticon-sick.svg';

export interface IEmoticonSickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonSickIcon: FC<IEmoticonSickIconProps> = memo(props => {
  return <EmoticonSickSvg {...props} />;
});
