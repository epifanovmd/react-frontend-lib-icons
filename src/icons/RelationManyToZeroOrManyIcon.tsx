import React, { FC, memo } from 'react';
import RelationManyToZeroOrManySvg from '../svg/relation-many-to-zero-or-many.svg';

export interface IRelationManyToZeroOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationManyToZeroOrManyIcon: FC<IRelationManyToZeroOrManyIconProps> = memo(props => {
  return <RelationManyToZeroOrManySvg {...props} />;
});
