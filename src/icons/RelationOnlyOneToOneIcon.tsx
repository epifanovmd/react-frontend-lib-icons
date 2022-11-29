import React, { FC, memo } from 'react';
import RelationOnlyOneToOneSvg from '../svg/relation-only-one-to-one.svg';

export interface IRelationOnlyOneToOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOnlyOneToOneIcon: FC<IRelationOnlyOneToOneIconProps> = memo(props => {
  return <RelationOnlyOneToOneSvg {...props} />;
});
